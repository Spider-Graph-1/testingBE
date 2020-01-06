const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('graphs-router.js', () => {
    describe('POST /', () => {
        it('should return 201 created', async () => {
            const graph_data = {
                labels: ['Axis1', 'Axis2', 'Axis3'],
                datasets: [
                    {
                      label: 'Dataset1',
                      borderDash: [0, 0],
                      backgroundColor: '#fff',
                      data: [25, 14, 22],
                    },
                        ],
                     title: 'Graph1'
                }

            const graph = {
                 graph_name: "test",
                 graph_info: JSON.stringify(graph_data),
                  image: "http://www.samplewebsite.com/image",
                user_id: 1
            }

            const res = await request(server).post('/api/graphs').send(graph);
            expect(res.status).toBe(201);
        })

        beforeEach(async () => {
            await db.raw('TRUNCATE TABLE graphs RESTART IDENTITY CASCADE');
          });
    })

    describe('GET /:id', () => {
        it('should return a graph with the specified id', async () => {
            const res = await request(server).get('api/graphs/1');
            expect(res.status).toBe(200);
        })
    })
    
    describe('PUT /:id', () => {
        it('should return the updated graph', async () => {

        })
    })
})