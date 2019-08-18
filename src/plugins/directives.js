/*
 * @Author: zhangpeng
 * @Date: 2019-08-18 09:22:44
 * @LastEditTime: 2019-08-18 09:30:45
 */
import { default as Prompt } from '@/plugins/prompt';

export const focus = {
    inserted: el => {
        el.focus();
    }
}
export const element_focus = {
    inserted: el => {
        el.children[0].focus()
    }
}
export const prompt = (el) => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    let result = null;
    el.onmousemove = ev => {
        let pos = { x: ev.pageX || ev.clientX + scrollLeft, y: ev.pageY || ev.clientY + scrollTop };
        result = Prompt({
            el,
            prompt: el.getAttribute("prompt"),
            el_left: pos.x,
            el_top: pos.y
        })
        window.event ? window.event.cancelBubble = true : ev.stopPropagation();
    }
    el.onmouseout = () => {
        if (result && result.exist()) result.close();
    }
    document.addEventListener("mousemove", function(ev) {
        if (ev.srcElement === el) {
            let pos = { x: ev.pageX || ev.clientX + scrollLeft, y: ev.pageY || ev.clientY + scrollTop };
            result = Prompt({
                el,
                prompt: el.getAttribute("prompt"),
                el_left: pos.x,
                el_top: pos.y
            })
        } else {
            if (result && result.exist()) result.close();
        }
    })
}