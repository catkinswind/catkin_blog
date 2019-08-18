/*
 * @Author: zhangpeng
 * @Date: 2019-06-04 21:09:37
 * @LastEditTime: 2019-08-18 09:32:19
 */
import moment from 'moment';
export const dateFormat = (date, pattern = "YYYY-MM-DD hh:mm:ss") => moment(date).format(pattern);
export const computedSize = (size) => {
    let count = 0;
    while (size > 1024) {
        size = size / 1000;
        count++;
    }
    if (count == 0) {
        return `${size}B`;
    } else if (count == 1) {
        return `${size.toFixed(2)}KB`;
    } else if (count == 2) {
        return `${size.toFixed(2)}MB`;
    } else if (count == 3) {
        return `${size.toFixed(2)}G`;
    }
};
export const fileNameFormat = (filename) => {
    const index = filename.lastIndexOf("."); //文件类型中.的位置
    filename = filename.slice(0, index);
    if (filename.length >= 40) {
        filename = `${filename.slice(0, 35)}......`;
    }
    return filename;
};
export const fileTypeFormat = (filename) => {
    const index = filename.lastIndexOf("."); //返回文件类型中.的位置
    const filetype = filename.slice(index + 1).toUpperCase();; //获取文件的后缀名
    // 'txt', 'jpg', 'jpeg', 'gif', 'png', 'js', 'php', 'class'
    if (filetype === 'TXT' || filetype === "JS") {
        return `${filetype}文本`;
    } else if (filetype === "JPG" || filetype === "JPEG" || filetype === "GIF" || filetype === "PNG") {
        return `${filetype}图片`;
    } else {
        return `${filetype}文件`;
    }
};