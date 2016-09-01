#PhotoGRID 

* Lets you upload photos using a simple interface.
* Every photo has a vote-up feature
* Stores photos in an Amazon S3 bucket
* App runs on Amazon Elastic Compute Cloud Infrastructure

#Working of PhotoGRID 
* This NodeJS App works on an Amazon Elastic Cloud Instance. 
* When you upload an image, the image first is resized using  the GraphicsMagik image processing library and is then pushed using the Amazon S3 bucket from where it is then displayed on the gallery interface. 
* Additionally entry for the image is also made in a MongoLab MongoDB. This is where we keep a track of the vote
count for every image. 
* The app uses two of the main service that Amazon offers:
```
-> Simple storage service (S3)
-> Elastic compute Cloud (EC2)-> virtual Web server running on the Amazon cloud. You get full control over the Server's 
computing capabilities, its OS, storage and bandwidth. Therefore you can start with the lowest configuration and grow up 
seamlessly as your business grows.
-> To store our image files we will store it using the S3.
-> Also will use Cloudfront Content Delivery Network where you set up a Content Delivery Network based on your S3 Bucket. 
This way Amazon pushes the files in your bucket where in this case it is Image. 
```
#Pre-requisites:
1.Latest version of Node.js 
2.Account on MongoLab.com
3.Account at Amazon Web Services
4.Graphics Magick Library

#Installation
* To run the app, first install the dependencies (in package.json) with NPM.

```bash
npm install
``` 

#Additional Steps
1. Set up the Amazon S3 bucket by following the steps given on the AWS help
2. Set up the cloudfront for the corresponding S3 bucket so that the images are recieved as fast as possible on the user interface
3. Set up the Elastic EC2 instace to host the NodeJS app by using Putty and FileZilla and using SSH telnet login
4. Get the Elstic IP of the corresponding EC2 instance
5. Just type in the Elastic IP on the browser and you are all set to actually view the app!





