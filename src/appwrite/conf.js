import conf from '../conf/config.js';
import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service {
    client = new Client();
    Databases;
    storage;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
       this.Databases=new Databases(this.client);
       this.bucket=new Storage(this.client);


    }
    async createPost({title ,slug,content,featuredImage,status,userId}){
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,

                }
            )
        } catch (error) {
            console.log("Appwrite service :: CreatePost::error",error)
       
        }
    }
    async UpdatePost(slug,{title ,content,featuredImage,status,userId} ){
try {
    return this.Databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
        title,
        content,
        featuredImage,
        status,

    })
} catch (error) {
    console.log("Appwrite service :: UpdatePost::error",error)
       
}    }
    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true;
        } catch (error) {
            console.log("Appwrite service ::DeletePost::error",error)
            return false;
        
            
        }
    }
    async getPost(slug){
    try {
        return await this.Databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)

    } catch (error) {
        console.log("Appwrite service ::GetPost::error",error);
    }
    }   
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.Databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries);

        } catch (error) {
            console.log("Appwrite service :: getCurrentUser::error",error)
       
            
        }
    }
    // file Upload Method 
    async  uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file);
        } catch (error) {
            console.log("Appwrite service :: uploadFile::error",error);
        return false;
    }
    }
    //delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile::error",error);
       return false;
     }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);

    }
       


}



const service=new Service();

export default service;