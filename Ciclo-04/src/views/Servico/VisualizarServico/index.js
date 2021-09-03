import { Container, Table } from "reactstrap"

export const VisualizarServico = () => {
    return (
        <div className="p-3">
            <Container>
                <Table dark hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviços</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>

                </Table>

            </Container>

        </div>
    )
}