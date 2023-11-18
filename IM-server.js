// import necessary Node Package Manager (npm)

const { exec } = require('child_process'); //Spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the exec function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly:
const maxApi = require("max-api");
const ip = requirePackage("ip")



/**
 * Checks if a given npm package is installed, and if not, installs it.
 * @param {string} packageName - The name of the npm package to check and install.
 */
function requirePackage(packageName) {
    try {
        // Attempt to require the package. If it's installed, this will succeed.
        return require(packageName);
    } catch (e) {
        // If an error is thrown, it means the package is not installed.
        console.log(`${packageName} is not installed. Installing...`);

        // Use exec to run the npm install command and install the package.
        exec(`npm install ${packageName}`, (err, stdout, stderr) => {
            if (err) {
                // If there's an error during installation, log it and exit.
                console.error(`Error installing ${packageName}: ${err}`);
                process.exit(1);
            }
            console.log(`${packageName} installed successfully.`);

            // Require and return the package after successful installation.
            return require(packageName);
        });
    }
}




function get_ip() {
    maxApi.outlet(`${ip.address()}`)

}




maxApi.addHandlers({
    qr: (ip) => (
        qr(ip)
    ),
    clear_files: () => (clear_files()),
    get_ip: () => (
        get_ip()
    )
}
)

get_ip();