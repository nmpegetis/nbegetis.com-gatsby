---
title: "Git: How to start code changes, commit and push changes when working in a team."
tags: ["dev", "code", "git", "commit changes", "team", "software", "December", "2018"]
description: "Guidelines when you are ready to make changes in existing code of yours or another’s and you want to commit them and then push them without creating merging problems."
author: "Nikolas Begetis"
date: "2018-12-20"
timeToRead: "4"
---


Guidelines when you are ready to make changes in existing code of yours or another's and you want to commit them and then push them without creating merging problems.
Check also the article directly in <a href="https://medium.com/@nmpegetis/git-how-to-start-code-changes-commit-and-push-changes-when-working-in-a-team-dbc6da3cd34c" target="_blank">Medium</a>

---

## Step-by-step guide (Create a new branch or checkout an existing one):

A. Create a branch or checkout an existing branch that your code changes are going to affect, and if needed only the first time you work at this repo clone, then the repo locally

B. Do your Changes

C. Commit Your Changes

D. Push changes to remote branch and, occasionally, create pull requests
Git stages and most common commands

> Keep the above image in mind.

### A. Create or checkout the branch that your code changes are going to affect (You set your workspace)

#### Create new feature branch

If you are assigned to work in a new project/feature then you need ONLY ONCE to create a branch for this feature tracking the develop branch which tracks the master branch

###### Git Commands

```
git clone http://<username>@<remote-project-directory>.git

git checkout master
git checkout -b <development branch> # e.g. git checkout -b dev
git checkout -b <development feature branch> # e.g. git checkout -b dev/featureA

# optionally, just to verify you are in the correct branch
git branch
```

Taking for granted that the project/feature has its own development branch that tracks the develop branch, everytime you want to make changes in code you can either create a new branch tracking your development branch dev/\<featureA>, or,

1. a. If you don't have locally checked out a remote branch, then checkout the existing remote branch from dev/\<featureA>$<branch_name> (but keep in mind that someone else may also be using it) (naming convention described below), else

2. b. checkout the existing local branch dev/\<featureA>$<branch_name> (but keep in mind that someone else may also be using it, if the branch has previously been pushed to remote) (naming convention described below)
   
#### A1. Create a new branch tracking your development branch <dev>/\<featureA>

###### Git Commands

```
git checkout dev/<featureA>
git fetch -p
git merge

# create new branch
git checkout -b <new branch> #(convention: <new branch> should follow this instruction: dev/<featureA>$<type-of-change>/<name-of-feature-or-component-affected-by-changes>)
# e.g. git checkout -b dev/featureA$feat/Login

# optionally, just to verify you are in the correct branch
git status # or git branch
```

#### A2a. Checkout an existing remote branch from dev/\<featureA>$<remote-branch>

###### Git Commands

```
# update the dev/<featureA> branch
git checkout dev/<featureA>
git fetch -p
git merge

# checkout the existing remote branch
git checkout <remote-branch> # e.g. git checkout dev/featureA$feat/Login
git rebase dev/<featureA>    # if there were changes in dev/<featureA>, then after having merged above, re-base the <remote-branch> on dev/<featureA> to apply all changes again on the new base that is set from the dev/<featureA>
```

#### A2b. Checkout an existing local branch from dev/\<featureA>$<local-branch>

###### Git Commands

```
# update the dev/<featureA> branch
git checkout dev/<featureA>
git fetch -p
git merge

# checkout the existing local branch
git checkout <local-branch> # e.g. git checkout dev/featureA$feat/Login
git merge                   # merge possible changes made in remote-branch that the local branch tracks. There may appear conficts fix them first and then continue.
git rebase dev/<featureA>   # if there were changes in dev/<featureA>, then after having merged twice above, re-base the <remote-branch> on dev/<featureA> to apply all changes again on the new base that is set from the dev/<featureA>
```

#### B. Do your Changes (State: Workspace)

Now in this step you have already checked out a branch where you can make changes that will affect only your local branch and all changes are set in workspace. Write your code, and make sure you test it before you continue to staging and commiting your code.

#### C. Commit your Changes (State: Stage Area and Local Repository)

Having finished with your code changes you have to follow this procedure:
you should set in stage the changes you want to apply to your local branch
commit your stage changes to your local branch of your local repository with a commit message

###### Git Commands

```
# Check the files in your workspace that have been changed and verify you are in the correct branch
git status

# Select the files you want to put in stage and commit thereafter
git add <files-in-workspace-to-be-staged-space-separated> # if you want all files to be put in stage, then  $ git add .

# Optionally, verify that all the files you wanted in stage area are set
git status

# Commit files to your local branch of your local repository
git commit # you can also commit inline using git commit -m '[Issue-Code] <type-of-change>(<files-affected>): your message using the Commit Message Conventions'
# Now a precompiler and some integration scripts will run and a commit window will open.
```

Tip: Allowed types for \<type-of-change>

```
 - feat (a new feature)
 - fix (bug fix)
 - perf (a code change that improves performance)
 - ci (changes to CI configuration files and scripts (e.g. kubernetes, swarm, jenkins, openshift, heroku))
 - build (changes that affect the build system or external dependencies (e.g. gulp, npm, yarn, .env variables))
 - docs (documentation only)
 - style (formatting, missing semi colons)
 - refactor (a code change that neither fixes a bug nor adds a feature)
 - test (code changes in tests)
 - chore (maintain (e.g. remove console.log, unnecessary comments))
```

Check also <a href="https://medium.com/p/841d6998fc4f" target="_blank">Commit Message Conventions
Commit Message</a>

Write your commit message as indicated in <a href="https://medium.com/p/841d6998fc4f" target="_blank">Commit Message Conventions
Commit Message</a>
Now you are all set. Your local repository branch contains your last changes.

#### D. Push changes to remote branch and, occasionally, create pull requests (State: Local Repository and Remote Repository)

Now your local repository branch contains your last changes, but meanwhile it is very common that a colleague of yours may have made changes in the same branch tracked on the remote repository.

##### Rebase before pushing to remote

Make sure before pushing your changes to remote that you are still up to date with your remote branch that your local branch is tracking. If so, then it is easy peasy.
If not, then you have to make some more chore in order to avoid playing the uncomfortable developers' "blaming-game". You **have to rebase.**

With rebase the local branch is rewinded to the common commit ancestor between local and remote branch, then there are applied the remote branch commits, and afterwards upon the remote HEAD there are applied your local commits one by one. In the good case scenario the merging will be completed succesfully. In the bad case scenario there will occur conficts in lines of code that are both changed in local and in remote branch. In such cases, you can either do a conflict resolution with the developer who commited the changes to the remote branch, or with a developer such as team leader that has a better view of the project scope, or in a few cases alone but carefully.

> TIP: To avoid this easily, commit and rebase regularly and make sure each commit belongs in only one type of change (feat, fix, refactor, etc.) and affects very few files and if possible only one.

###### Git Commands

```
# get the latest changes from the remote tracking branch
git fetch -p

# update the local branch by rebasing from the remote tracking branch
git rebase
```

If rebase went fine then continue to pushing your local commits to the remote branch.
If not, you have to resolve confilcts as described above and then add again all files changed in the workspace to the staging area.

###### Git Commands

```
# Check the files in your workspace that have been changed after rebasing
git status

# Select all files to put be in stage and commit thereafter
git add <files-changed-in-workspace-after-rebase> # if you want all files to be put in stage, then $ git add .

# Optionally, verify that all the files you wanted in stage area are set
git status

# Commit files to your local branch of your local repository, giving a explanatory merge message
git commit # you can also commit inline using git commit -m 'your message using the Commit Message Conventions'
```

Now you are set and ready to push your changes in the remote branch.

###### Git Commands

```
# Case 1: You checked out a new branch from your local repository, with git checkout -b <new branch>
git push --set-upstream <remote branch, usually 'origin'> <local new branch> # this is also proposed from git itself if you git push

# Case 2: You checked out an existing repository and rebase went fine
git push

# Case 3: You checked out an existing repository and rebase had conflicts that you solved
git push --force-with-lease
```

**Finally, we recommend that you create pull request (PR) to merge your branch with the main project branch only by using remote server and to set also as reviewers all the team members, or the team leaders, or a possibly set team of code reviewers.**

Check also the <a href="https://medium.com/@nmpegetis/git-how-to-start-code-changes-commit-and-push-changes-when-working-in-a-team-dbc6da3cd34c" target="_blank">Medium here</a>.