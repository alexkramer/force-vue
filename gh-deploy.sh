#!/bin/bash

# Builds latest committed master branch and deploys to gh-pages

set -o errexit # Stop on any error

# Switch over to master branch, if not already in it, stash any changes of
# current branch first. Assumption: We always want to deploy from master.

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo $branch
if [ "$branch" != "master" ]; then
    echo "Stashing current branch and switching to master for deploy."
    git stash save
    git checkout master
fi

rm -rf dist # Delete the last builds dist content
npm run build # Build the project

# Dist is in the .gitignore file, so let's force add the dist folder and commit
# Side effect: We get a nice log of every deploy + content
git add dist -f

# If there's something to commit go ahead
git diff --quiet --exit-code --cached  || git commit -m 'Deploy commit.'

#git subtree split --prefix dist -b gh-page
git push origin `git subtree split --prefix dist`:gh-pages --force

# Get rid of dist content from master branch...probably overkill here
git rm dist -r
rm -rf dist
git diff --quiet --exit-code --cached  || git commit -m 'Post-Deploy commit.'

# Switch back to original branch and unstash
if [ "$branch" != "master" ]; then
    echo "Switching back to $branch and unstashing changes."
    git checkout $branch
    git stash pop
fi


echo "Finished Github Pages deploy."
