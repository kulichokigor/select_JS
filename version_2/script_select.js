class Dropdown{
    constructor(classLabel,options){
        this.$el=document.querySelector(classLabel)
        
        this.label = this.$el.querySelector('.drowblock__label')
        this.select =this.$el.querySelector('.drowblock__select')
        this.list = options.list
        this.label.textContent = options.list[1].label

       const tagInSelect = options.list.map(i=>{
           return `<li data-dir=${i.id}>${i.label}</li>`
       }).join(' ')
        this.select.insertAdjacentHTML('afterbegin',tagInSelect)
         

        this.$el.addEventListener('click',event=>{
            event.target.classList.contains('drowblock__label')?this.openSelect():this.removeSelect();
            event.target.tagName.toLowerCase()==='li'?this.selectFunc(event.target.dataset.dir):NaN
        })
    }
    selectFunc(ud){
        const findResult = this.list.find(i=>{
            return i.id===ud
        })
        this.label.textContent = findResult.label
    }
    openSelect(){
        this.select.classList.add('open')
    }
    removeSelect(){
        this.select.classList.remove('open')
    }
}


const dropdown = new Dropdown('.drowblock',{
    list:[
        {label:'BMW',id:'001'},
        {label:'Audi',id:'002'},
        {label:'Porshe',id:'003'},
        {label:'Bugatti',id:'004'},
        {label:'Lexus',id:'005'},
        {label:'Ford',id:'006'},
        {label:'Nisan',id:'007'},
        {label:'Mitsubisi',id:'008'},
        {label:'Mercedes-Benz',id:'009'},
        {label:'Peugeot',id:'010'}
    ]
})