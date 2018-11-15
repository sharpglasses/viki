import Utils from "./utils.js";

class VikiInfo {
    constructor() {
        // Target page specified by user.
        this.target = '';

        // Anchor within target page.
        this.anchor = '';

        // Base url.
        this.baseUrl = '';

        // Whether enable toc.
        this.toc = true;

        // Navigation file for this target.
        this.naviFile = '';

        // Index page of navigation file.
        // Base URL prepended.
        this.naviIndex = '';

        // Data of the target file.
        this.data = null;

        this.naviContainerId = '';
        this.contentContainerId = '';
        this.tocContainerId = '';
    }

    setTarget(p_target, p_anchor = '') {
        this.target = p_target;
        this.anchor = p_anchor;

        let utils = new Utils();
        this.baseUrl = utils.baseOfPath(p_target);
    }
}

export default VikiInfo;
