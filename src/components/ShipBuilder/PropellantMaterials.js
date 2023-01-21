const PropellantMaterials = (props) => {
    const unitDisplay = (amount) => {
        let displayAmount = amount;
        let unit = '';

        if (amount < .00000001) {
            displayAmount = amount * 10000000000000;
            unit = 'p';
        } else if (amount < .01) {
            displayAmount = (amount * 10000000)
            unit = 'u';
        }

        return displayAmount.toLocaleString('en-US') + unit;
    }

    let propellantList = []
    for (const [propellant, amount] of Object.entries(props.propellant)) {
        let iconName = propellant;
        if (propellant === 'fissiles') {
            iconName = 'fissile';
        }

        if (amount > 0) {
            propellantList.push(
                <span key={propellant} style={{
                    paddingLeft: '17px',
                    marginLeft: '3px',
                    backgroundImage: `url('assets/icons/ico_${iconName}.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 17,
                }}>
                        {unitDisplay(amount)}
                    </span>
            );
        }
    }

    return (
        <>
            {propellantList}
        </>
    )
}

export default PropellantMaterials;