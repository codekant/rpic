# Rpic Discord Bot
<img src="https://raw.githubusercontent.com/codekant/rpic/master/src/raw/images/amogus.png" height="20"> A simple discord truth or dare bot!

### Getting started 
* Install the zip file, and extract it or whatever.
* Open the folder and then run 
```npm install```
* Rename `DOTenv` to `.env` and then fill up the credentials/config
* You're now almost done getting your bot up! <br> Run 
```node .``` in the terminal and your bot should be up.

### Features
* Neat Embeds and an Eval Command for testing.
* In Development so will be active on github for a while.
* Has its own API, when the server is up you should be able to use the API <br>from anywhere like - 
> * Random Dare <br>`http://<IP/DNS>:<PORT>/api/dare`
> * Random Truth <br>`http://<IP/DNS>:<PORT>/api/truth`
> * Random WouldYouRather <br>`http://<IP/DNS>:<PORT>/api/wyr`
> * Random NeverHaveIEver <br>`http://<IP/DNS>:<PORT>/api/nhie`

* * Queries for NeverHaveIEver - 
#### Link
> `http://<IP/DNS>:<PORT>/api/nhie?type=YOUR_CHOICE_HERE`
#### Types
> * `nsfw` - Returns Adult content, make sure you either spoiler it or post<br> it only in a nsfw safe channel.
> * `slight_nsfw` - Slightly nsfw, but still follow the same rules as above.
> * `normal` - This is casual NeverHaveIEver, and is the default when no<br>query is provided.

### License
This project is licensed under the MIT License

### Note
I myself haven't gone through the `nsfw` category in the `nhie` command,<br>
please let me know if anything is way too weird in it. I will remove it asap.<br>
It's weird as hell, so I myself didn't want to go through it.

### Links
[Codekant](https://github.com/codekant "Author") 
<br>
[Website](https://kant.gq/ "Author Website")
<br>
[Live Demo](https://discord.com/api/oauth2/authorize?client_id=619490565154668546&permissions=67161152&scope=bot "OAuth2 Invite Link")
<br>
[Discord](https://discord.gg/DFpvmnRp6U "Discord Server")
