# ImageMagickJS

<img src="./coverage/badge-functions.svg">

ImageMagick wrapper for nodeJS.<br/>
ImageMagick should be installed on dev and prod machine in order to work.<br/>
For windows users you need to add a PATH env variable called "magick" and linking to magick.exe.<br/>
Latest release can be found at [imagemagick.org](https://imagemagick.org/script/download.php).<br/>

Feel free to contribute.<br/>
More commands will come soon.<br/>
If you want one you can open an issue ticket.<br/>

## Install

Install using your package manager :<br/>

    npm i --save image-magick-js
    or
    yarn add image-magick-js

Import the package in your js / ts file :<br/>

    const  magick = require("image-magick-js");
    or
    import magick from "image-magick-js";

## Available commands

Commands can be used with a classic **promise** or inside an async function using **await**.<br/>

### custom

Send custom command to magick.<br/>

Parameters :<br/>
**options** : string, magick command with custom options<br/>

    const options = "convert -background lightblue -fill blue \
          -pointsize 72 label:christophe \
          label.gif";
    magick.custom(options)
    .then((response) => console.log(response))
    .catch((e) => {console.log(e);});

### convert

**format**<br/>

Parameters :<br/>
**sourceFile** : string, path to source image.<br/>
**targetFile** : string, path to target image.<br/>

    const params={
        sourceFile: string,
        targetFile: string,
    }
    magick.convert.format(params)
    .then((response) => console.log(response))
    .catch((e) => {console.log(e);});

**resize**<br/>

Parameters :<br/>
**sourceFile** : string, path to source image.<br/>
**resize** : string, new size, can be "50%", "800x600" or "4096@".<br/>
**force** : boolean, optional, force the new size even if ratio is not preserved.<br/>
**targetFile** : string, optional, path to target image<br/>
If the file doesn't exist it will be created.<br/>
If the parameter is not defined targeted file will be the source file.<br/>

    const params={
        sourceFile: string,
        resize: string,
        targetFile: string,
        force: boolean,
    }
    magick.convert.resize(params)
    .then((response) => console.log(response))
    .catch((e) => {console.log(e);});

**caption**<br/>

Parameters :<br/>
**targetFile** : string, path to target image (if the file doesn't exist it will be created).<br/>
**caption** : string, text you want to write inside image.<br/>
**pointSize** : number, optional, font size.<br/>
**size** : string, optional, image ratio.<br/>
**gravity** : string, optional, text position ("Center", "South", "North", "East", "West", "NorthWest", "NorthEast", "SouthWest", "SouthEast").<br/>

    const params={
        targetFile: string,
        caption: string,
        pointSize: number,
        size: string,
        gravity: string
    }
    magick.convert.caption(params)
    .then((response) => console.log(response))
    .catch((e) => {console.log(e);});

### identify

Parameters :<br/>
**file** : string, file to analyse<br/>

    magick.identify(file)
    .then((response) => console.log(response))
    .catch((e) => {console.log(e);});

    response object is like this :
    {
        filename: string;
        imageFormat: string;
        widthXheight: string;
        pageWidthXpageHeightXoffsetYoffset: string;
        colorspace: string;
        weight: string;
        userTime: string;
        elapsedTime: string;
        error: string;
    }
