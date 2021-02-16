let beerFrames = Array.from(document.getElementsByClassName("beer-frame"));

beerFrames.forEach(frame => {
    frame.onclick = () => {
        beerFrames.forEach(f => {
            if(frame != f) {
                f.classList.remove("selected");
            }
        });
        frame.classList.add("selected");
    };
});