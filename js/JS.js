class opens {    constructor(){        this.openEl;        this.clickEl = document.querySelectorAll('.main-icon-services');        this.status = "notOpen";        this._init();    }    _init(){        this.clickEl.forEach((el) => {            el.addEventListener('click', () => {                if (this.status === "notOpen" ) {                    this.open(el);                } else if(this.status === "open"&& this.openEl === document.querySelector(`.${el.dataset.class}`) ) {                    this.closed(el);                }else if (this.status === "open" && this.openEl != document.querySelector(`.${el.dataset.class}`)) {                    this.closedOpen(el)                }            });        }        )    }    open(el){       this.openEl = document.querySelector(`.${el.dataset.class}`);        this.openEl.style.display = "block";        this.status = "open";    }    closed(el){        this.openEl.style.display = "none";        this.status = "closed";        this.status = "notOpen";    }    closedOpen(el) {        this.openEl.style.display = "none";        this.open(el);}}let Open = new opens();