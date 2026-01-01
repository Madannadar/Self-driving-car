class Controls{
    constructor(type){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        switch(type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward = true;
                break;
        }
         // # means this is private no other file can access this function
    } 

    #addKeyboardListeners(){
        document.onkeydown = (event) => { // arrow function lets the "this" to point to the main "this" and not only inside the function
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown": 
                    this.reverse = true;
                    break;
            }
            // console.table(this);
        }
        document.onkeyup = (event) => {
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown": 
                    this.reverse = false;
                    break;
            } 
            // console.table(this);
        }
    }
}