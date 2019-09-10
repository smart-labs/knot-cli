/********************************************* **
|		  KNoT-CLI created by SmartLabs		 	|
| 			   version 0.1.0 draft				|
|												|
** ******************************************** */

/* Libraries */
#include "../lib/utility.h"


/* Constants and Defines */ 
#define PORT_0 "GPIO_1"
#define PIN_0 10




/* Log */
LOG_MODULE_REGISTER(lol, LOG_LEVEL_DBG);


/* Variables */ 
struct device *device_0;
uint32_t var_0;




/* Proxy to Thing */ 
void read_0(struct knot_proxy *proxy)
{
	knot_proxy_value_set_basic(proxy, &var_0);
	LOG_INF("Value changed to %d", var_0);
}

/* Thing to Proxy */
void write_0(struct knot_proxy *proxy)
{
	knot_proxy_value_get_basic(proxy, &var_0);
	LOG_INF("Value read %d", var_0);
}





void setup(void)
{
	/* Peripherals control */
    device_0 = device_get_binding(PORT_0);
    gpio_pin_configure(device_0, PIN_0, GPIO_DIR_OUT);



	/* KNoT Register */
    knot_proxy_register(
        0,
        "SENSOR_0",
        KNOT_TYPE_ID_SWITCH,
        KNOT_VALUE_TYPE_INT,
        KNOT_UNIT_NOT_APPLICABLE,
        write_0,
        read_0
    );



	/* KNoT Config */
    knot_proxy_set_config(0, KNOT_EVT_FLAG_CHANGE, NULL);


}

void loop(void)
{

}