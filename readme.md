# KNoT CLI

KNoT CLI is a javascript package to speed up the development process in KNoT v2.

The KNoT CLI are available in [NPM](https://www.npmjs.com/package/knot-cli)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install knot-cli.

```bash
npm install -g knot-cli
```

## Commands Summary

Supports the commands shown below

* **Help**

  To show all available commands, use the help.

   ```bash
   knot-cli --help
   ```
&nbsp;
* **Version**

  To show the knot-cli version, use the version.

   ```bash
   knot-cli --version
   ```
&nbsp;
* **Create Application**

  To create a new application, use create.

  > Pass the project name and a blank project will be created.

   ```bash
   knot-cli create projectName
   ```

  > Pass the project name and the number of digital pins and a project will be created configured with digital pins.

   ```bash
   knot-cli create projectName --digital value
   # or :
   knot-cli create projectName -d value
   ```
&nbsp;
* **Clone Exemple**
   
    To clone a sample project, use the clone.

    > Pass the function for the sample project to clone the repository.
   
    ```bash
   knot-cli clone function
   ```
  > The table below follows the examples available for cloning.

  | Projects        | function               |
  | --------------- | ---------------------- |
  | analog alert    | --al, --analogAlert    |
  | digital counter | --dc, --digitalCounter |
  | hello dongle    | --hd, --helloDongle    |
  | multisensor     | --ms, --multisensor    |
  | hello           | --hello                |
  | plate           | --plate                |
  | tank            | --tank                 |
  | thermo          | --thermo               |
  | toggle          | --toggle               |

&nbsp;
* **KNoT Documentation**

  To open KNoT documentation, use the doc:knot.

   > Use one of the commands below to open the documentation on the home page.
   
    ```bash
   knot-cli doc:knot
   # or :
   knot-cli dock
   ```
   > To open documentation in a specific location, use one of the following functions: --cloud, --gateway, --thing or --start.

   ```bash
   knot-cli dock function
   ```
&nbsp;
* **Zephyr Documentation**

  To open Zephyr documentation, use the doc:zephyr.

   > Use one of the commands below to open the documentation on the home page.
   
    ```bash
   knot-cli doc:zephyr
   # or :
   knot-cli docz
   ```
   > To open documentation in a specific location, use one of the following functions: --api or --start.

   ```bash
   knot-cli docz function
   ```
&nbsp;
* **Open Docker**

  To open the docker, use the docker.

   ```bash
   knot-cli docker
   ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)