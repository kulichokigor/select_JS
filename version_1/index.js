class Dropdown{
    constructor(dropdown,options){
        this.$el = document.querySelector(dropdown)
        this.list = options.list
        this.select = document.querySelector('.drowblock__select')

        this.$el.querySelector('.drowblock__label').textContent = this.list[0].label
        
        const elementHTML = this.list.map(i=>{return `<li data-id='${i.id}'>${i.label}</li>`}).join(' ')
        this.select.insertAdjacentHTML('afterbegin',elementHTML)

        this.$el.addEventListener('click',event=>{
            event.target.classList.contains('drowblock__label')?this.open():this.close()
            event.target.tagName.toLowerCase()==='li'?this.seleFunc(event.target.dataset.id):NaN
        })
    }
    seleFunc(id){
        const selectLabel = this.list.find(i=>i.id===id)
        this.$el.querySelector('.drowblock__label').textContent = selectLabel.label
    }
    open(){
        this.select.classList.add('open')
    }
    close(){
        this.select.classList.remove('open')
    }
}

const dropdown = new Dropdown('#dropdown', {
    list:[
        {label:'Poltava', id:'pl'},
        {label:'Kyiv', id:'kv'},
        {label:'Odessa', id:'od'},
        {label:'Kharkiv', id:'kh'},
        {label:'Ivano-Frankivsk', id:'fr'},
        {label:'Lviv', id:'lv'},
        {label:'Dnipro', id:'dp'}
    ]
})