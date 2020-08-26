import  { Car } from "@angular/core";

export interface Track{
    name : string;
    path : string;

}
@component ({
    selector :'app-home',
    templateUrl: 'index.html',
    styleUrls:['style.css']
})
export class HomePage{
    playlist : Track[]=[
        {
            name:'A new beginning',
            path :'./assest/mp3/bensound-anewbeginning.mp3'
        },
        {
            name:'creative Minds',
            path :'./assest/mp3/bensound-creativeminds.mp3'
        },
        {
            name:'Summer',
            path :'./assest/mp3/bensound-summer.mp3'
        }
        
    ];
    activeTrack: Track =null;
    player:Howl =null;
    isPlaying = false;
    progress = 0;
    @viewChild('range',{static:false}) range:IonRange;
    
    constructor(){}
    start(track : Track){
        if(this.player){
            this.player.stop();
        }
        this.player=new Howl({
            src:[track.path],
            html5:true,
            onplay: ()=>{
                this.isPlaying = true;
                this.activeTrack=track;
                this.updateProgress();
                
            },
            onend: () =>{

            }
        });
        this.player.play();

    }
    tooglePlayer(pause){
        this.isPlaying = !pause;
        if(pause){
            this.player.pause();
        }else{
            this.player.play();
        }

    }
    next(){
        let index = this.playlist.indexOf(this.activeTrack);
        if(index != this.[this.playlist.length -1){
            this.start(this.playlist[index + 1]);

        }else {
            this.start(this.playlist[0]);
        }

    }
    prev(){
        let index = this.playlist.indexOf(this.activeTrack);
        if(index > 0){
            this.start(this.playlist[index - 1]);

        }else {
            this.start(this.playlist[this.playlist.length -1]);
        }

    }
    seek(){
        let newValue = this.range.value;
        let duration = this.player.duration();
        this.player.seek(duration * (newValue/100));

    }
    updateProgress(){
        let seek = this.player.seek();
        this.progress = (seek / this.player.duration())* 100 ||0;
        setTimeout(()=>{
            this.updateProgress();
        }, 1000)
        }

    }
}