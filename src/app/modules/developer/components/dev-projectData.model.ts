export interface getprojectData{
    projectTitle: string
    projectName: string;
    projectType: string;
    created: string;
    deadLine: string;
    features: string;
    Developer: string;
    submitter: string;
}
export interface updateprojectface{
    projectTitle: string
    projectName: string;
    ProjectStatus: string;
}
export interface UploadProjectInter{
    projectTitle: string
    projectName: string;
    comments: string;
    GitRepo: string
}