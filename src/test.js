const Exif = require("simple-exiftool");
 
Exif("./final-icon-2.png", (error, metadata) => {
    
    if (error) {
        // handle error
    }
    console.log(metadata);
});