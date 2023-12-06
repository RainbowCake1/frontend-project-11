import  './styles.scss';
import  'bootstrap';
import * as yup from 'yup'

import "~bootstrap/scss/bootstrap";

export const schema = yup.object({
    url: yup.string().url().required()
})

export function test(){
document.getElementsByClassName('rss-form').addEventListener('submit',(e)=>{
    e.preventDefalut()
    
    alert('ok')
})
}

