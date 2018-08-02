const args = ["start"];
const opts = { stdio: "inherit", cwd: "campuscarrier-managertool", shell: true };
require("child_process").spawn("npm", args, opts);
