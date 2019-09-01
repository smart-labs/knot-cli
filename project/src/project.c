/********************************************* **
|		  KNoT-CLI created by SmartLabs		 	|
| 			   version 0.1.0 draft				|
|												|
** ******************************************** */

/* Libraries */
#include "lib/knot.h"


/* Constants and Defines */ 
#define PORT_0 "GPIO_1"
#define PIN_0 10;

#define PORT_1 "GPIO_1"
#define PIN_1 13;

#define PORT_2 "GPIO_1"
#define PIN_2 15;




/* Log */
LOG_MODULE_REGISTER(project, LOG_LEVEL_DBG);


/* Variables */ 
struct device *device_0;
uint32_t var_0;

struct device *device_1;
uint32_t var_1;

struct device *device_2;
uint32_t var_2;




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


/* Proxy to Thing */ 
void read_1(struct knot_proxy *proxy)
{
	knot_proxy_value_set_basic(proxy, &var_1);
	LOG_INF("Value changed to %d", var_1);
}

/* Thing to Proxy */
void write_1(struct knot_proxy *proxy)
{
	knot_proxy_value_get_basic(proxy, &var_1);
	LOG_INF("Value read %d", var_1);
}


/* Proxy to Thing */ 
void read_2(struct knot_proxy *proxy)
{
	knot_proxy_value_set_basic(proxy, &var_2);
	LOG_INF("Value changed to %d", var_2);
}

/* Thing to Proxy */
void write_2(struct knot_proxy *proxy)
{
	knot_proxy_value_get_basic(proxy, &var_2);
	LOG_INF("Value read %d", var_2);
}





void setup(void)
{
	/* Peripherals control */
    device_0 = device_get_binding(PORT_0);
    gpio_pin_configure(device_0, PIN_0, GPIO_DIR_OUT);

    device_1 = device_get_binding(PORT_1);
    gpio_pin_configure(device_1, PIN_1, GPIO_DIR_OUT);

    device_2 = device_get_binding(PORT_2);
    gpio_pin_configure(device_2, PIN_2, GPIO_DIR_OUT);



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

    knot_proxy_register(
        1,
        "SENSOR_1",
        KNOT_TYPE_ID_SWITCH,
        KNOT_VALUE_TYPE_INT,
        KNOT_UNIT_NOT_APPLICABLE,
        write_1,
        read_1
    );

    knot_proxy_register(
        2,
        "SENSOR_2",
        KNOT_TYPE_ID_SWITCH,
        KNOT_VALUE_TYPE_INT,
        KNOT_UNIT_NOT_APPLICABLE,
        write_2,
        read_2
    );



	/* KNoT Config */
    knot_proxy_set_config(0, KNOT_EVT_FLAG_CHANGE, NULL);
    knot_proxy_set_config(1, KNOT_EVT_FLAG_CHANGE, NULL);
    knot_proxy_set_config(2, KNOT_EVT_FLAG_CHANGE, NULL);


}

void loop(void)
{

}