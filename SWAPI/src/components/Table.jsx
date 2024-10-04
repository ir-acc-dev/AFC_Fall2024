function Table({data}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {data ? (
                    data.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.height}</td>
                            <td>{person.hair_color}</td>
                            <td>{person.gender}</td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>Click the "Display" button below to show the data</td>
                        </tr>
                    )}
            </tbody>
        </table>
        
    )
}

export default Table;