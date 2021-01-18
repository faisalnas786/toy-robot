class Surface {
    
    /**
     * @param {*} width 
     * @param {*} height 
     */
    constructor (width = 5, height = 5) {
        this.width = width;
        this.height = height;
    }

    /**
     * @param {*} x 
     * @param {*} y 
     */
    checkSurfaceOutOfBound (x, y) {
        if (x < 0 || y < 0) 
            return true;
        else if (x > (this.width - 1)) 
            return true;
        else if (y > (this.height - 1)) 
            return true;
        else 
            return false;
    }
}

export default Surface;