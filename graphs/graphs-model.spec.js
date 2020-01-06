const Graphs = require('./graphs-model.js');
const db = require('../data/db-config.js');

describe('graphs model', () => {
    describe('add', () => {
        it('should add a graph to the database', async () => {
            const graph_data = {
                labels: ['Axis1', 'Axis2', 'Axis3'],
                datasets: [
                    {
                      label: 'Dataset7',
                      borderDash: [0, 0],
                      backgroundColor: '#fff',
                      data: [25, 14, 22],
                    },
                        ],
                     title: 'Graph7'
                }

            const graph = {
                 graph_name: "test",
                 graph_info: JSON.stringify(graph_data),
                  image: "http://www.samplewebsite.com/image",
                user_id: 1
            }

            await Graphs.add(graph)
            const graphs = await db('graphs');
            expect(graphs).toHaveLength(1);
        })

        beforeEach(async () => {
            await db.raw('TRUNCATE TABLE graphs RESTART IDENTITY CASCADE');
        })
    })
})