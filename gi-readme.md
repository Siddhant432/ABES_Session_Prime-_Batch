git init (in particular folder)
git add <file1path> <file2path> <file3path>
git commit -m 'title' -m 'description'
git push 
   * if you have not configured a remote branch 
   * * git remote add repoName repoLink

   * if your branch don't exist on the
   remote server 
   * * git push --set-upstream repoName
   branchName