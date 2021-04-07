let superbowlWin = (record) => {
    let win = record.find(object => object.result === `W`)
    console.log(win)
    return !! win ? win.year : undefined
}