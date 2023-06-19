import { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

const Calculator = () => {
    const [temperature, setTemperature] = useState('');

    const [scale, setScale] = useState('c');

    const toCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) * 5) / 9;
    };
    const toFahrenheit = (celsius) => {
        return (celsius * 9) / 5 + 32;
    };

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    const tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    };

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


    return (
        <div>
            <TemperatureInput
                scale={'c'}
                handleChange={handleChange}
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale={'f'}
                handleChange={handleChange}
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
};

export default Calculator;
