function Header( { rows}) {
    const keys = Object.keys(rows.length?rows[0]:{});
    return (

        <thead>
            <tr>
                {
                    keys.map(key => <th key={key}>{key}</th>)
                }
            </tr>
        </thead>

    )

}

export default Header;