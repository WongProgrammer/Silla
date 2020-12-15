class YoutubeLink{
    constructor(name, link, category, author) {
        this.name = name;
        this.link = link;
        this.category = category;
        this.author = author;
    }
}

const PERFORMANCE = "Performance";
const ADVERTISEMENTS = "Advertisements";
const MUSICVIDEOS = "Music Videos";
const RECAPS = "Recaps";

//Alice: The Live Performance
const ALICE = "Alice: The Live Performance";
let live1 = new YoutubeLink("Wildcard", "https://www.youtube.com/watch?v=8DWQhselQIc", PERFORMANCE, ALICE);
let live2 = new YoutubeLink("SMOKE IT OUT", "https://www.youtube.com/watch?v=5Mkmt8qrWZs", PERFORMANCE, ALICE);
let live3 = new YoutubeLink("That's Why I Love You", "https://www.youtube.com/watch?v=3LIMVCQkzk8", PERFORMANCE, ALICE);
let live4 = new YoutubeLink("Lost In Your Light", "https://www.youtube.com/watch?v=zT-6_e743o8", PERFORMANCE, ALICE);
let live5 = new YoutubeLink("Floating", "https://www.youtube.com/watch?v=jdh959vzDqM", PERFORMANCE, ALICE);
let live6 = new YoutubeLink("Nitemrkt at ACN’s Creative Arts Festival 2019", "https://www.youtube.com/embed/LTjCiGbeWHI?feature=oembed", PERFORMANCE, "Nitemrkt");
let live7 = new YoutubeLink("In My Own Way - Jonathan Cronan", "https://www.youtube.com/embed/Uuj0NF47wzY?feature=oembed", PERFORMANCE, "Cronan");

//Advertisements
let ad1 = new YoutubeLink("Cinesamples - Labor Day Sale Trailer", "https://youtu.be/QBd81iYMfPc?feature=oembed", ADVERTISEMENTS, "Cinesamples");
//Zeff Manuel
const ZEFF = "Zeff Manuel";
let ad2 = new YoutubeLink("Zeff Manuel Ad #1", "https://www.youtube.com/embed/scIBZR9hOio?feature=oembed", ADVERTISEMENTS, ZEFF);
let ad3 = new YoutubeLink("Zeff Manuel Ad #2", "https://www.youtube.com/embed/PCIRBJ3dcJ4?feature=oembed", ADVERTISEMENTS, ZEFF);
let ad4 = new YoutubeLink("Brandman Ad", "https://www.youtube.com/embed/AtSCK2e_cyQ?feature=oembed", ADVERTISEMENTS, "Brandman");
//Barakada
const BARKADA = "Barkada";
let ad5 = new YoutubeLink("Barkada Hollywood - Creamy Sisig", "https://www.youtube.com/embed/dh-AicRv3GQ?feature=oembed", ADVERTISEMENTS, BARKADA);
let ad6 = new YoutubeLink("Barkada Hollywood - Purple & Gold", "https://www.youtube.com/embed/MjTdQnWvdK4?feature=oembed", ADVERTISEMENTS, BARKADA);

//MUSIC VIDEOS
//Ryan Satyr
const RYAN = "Ryan Satyr";
let mv1 = new YoutubeLink("Do You Love You", "https://www.youtube.com/embed/quggtm_HJA4?feature=oembed", MUSICVIDEOS, "Jason Chu & Melione");
let mv2 = new YoutubeLink("Late Nights - Ryan Satyr", "https://www.youtube.com/embed/z3gt5ygSNRQ?feature=oembed", MUSICVIDEOS, "Ryan Satyr");
let mv3 = new YoutubeLink("New Beginnings - Gianni G (@lucr8tive_g)", "https://www.youtube.com/embed/X9QXguVMspc?feature=oembed", MUSICVIDEOS, "Gianni G");
let mv4 = new YoutubeLink("Be A Man (ft. Babi Boi) [90's Remix] - Ryan Satyr", "https://www.youtube.com/embed/-hU5bZAWtvM?feature=oembed", MUSICVIDEOS, RYAN);

//RECAPS
let recap1 = new YoutubeLink(".Paak House in the Park 2019 - Recap","https://www.youtube.com/embed/BuxsvDj1ly8?feature=oembed", RECAPS, ".Paak");
let recap2 = new YoutubeLink("ACN Creative Arts Festival 2019", "https://www.youtube.com/embed/4Jl3x0vIBJY?feature=oembed", RECAPS, "ACN");
let recap3 = new YoutubeLink("KX Fest 2019 - Day One Recap", "https://www.youtube.com/embed/4e0Hz-2Vd-w?feature=oembed", RECAPS, "KX Fest");

//Traktivist
const TRAKTIVIST = "Traktivist";
let recap4 = new YoutubeLink("TRAKTIVIST Radio Interview with Gabe Bondoc","https://www.youtube.com/embed/pwEvMZ-Ze4M?feature=oembed", RECAPS, TRAKTIVIST);
let recap5 = new YoutubeLink("TRAKTIVIST Radio Interview with Brian Puspos", "https://www.youtube.com/embed/sFsXJB8p_Ss?feature=oembed", RECAPS, TRAKTIVIST);
let recap6 = new YoutubeLink("TRAKTIVIST Radio One Year Anniversary Recap", "https://www.youtube.com/embed/PQLjPFqs8hg?feature=oembed", RECAPS, TRAKTIVIST);
let recap7 = new YoutubeLink("TRAKTIVIST Radio Interview with Albert Posis", "https://www.youtube.com/embed/yqWQk_9qOMA?feature=oembed", RECAPS, TRAKTIVIST);
let recap8 = new YoutubeLink("Dabin at the Fonda Theatre, Hollywood", "https://www.youtube.com/embed/1rH_2C0TV5w?feature=oembed", RECAPS, "DABIN");
let recap9 = new YoutubeLink("Yultron: Rave Prom 2019 at the Hollywood Palladium", "https://www.youtube.com/embed/rjWfItHtSqY?feature=oembed", RECAPS, "Yultron")
let recap10 = new YoutubeLink("DEAN at 1720, Los Angeles", "https://www.youtube.com/embed/arGeqWYHh3g?feature=oembed", RECAPS, "DEAN"); 

let home = new YoutubeLink("2019 Video Reel", "https://www.youtube.com/watch?v=loi-EW2dfyE", "Home", "Silla");

//Push to array
var vid_list = [];
vid_list.push(live1);
vid_list.push(live2);
vid_list.push(live3);
vid_list.push(live4);
vid_list.push(live5);
vid_list.push(live6);
vid_list.push(live7);

vid_list.push(ad1);
vid_list.push(ad2);
vid_list.push(ad3);
vid_list.push(ad4);
vid_list.push(ad5);

vid_list.push(recap1);
vid_list.push(recap2);
vid_list.push(recap3);
vid_list.push(recap4);
vid_list.push(recap5);
vid_list.push(recap6);
vid_list.push(recap7);
vid_list.push(recap8);
vid_list.push(recap9);
vid_list.push(recap10);

vid_list.push(mv1);
vid_list.push(mv2);
vid_list.push(mv3);
vid_list.push(mv4);

vid_list.push(home);

exports.FINAL_VID_LIST = vid_list;