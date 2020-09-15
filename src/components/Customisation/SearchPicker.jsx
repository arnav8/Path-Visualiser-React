import React, { Component } from "react";
import { Row, Col, FormGroup, Card, Tab, ListGroup } from "react-bootstrap";

export class SearchPicker extends Component {
  render() {
    const { changeAlgorithm } = this.props;
    return (
      <div>
        <FormGroup>
          <Card.Title style={{ textAlign: "left" }}>
            1. Choose an Algorithm to Visualise
          </Card.Title>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#bfs">
            <Row>
              <Col sm={5}>
                <ListGroup>
                  <ListGroup.Item
                    action
                    href="#astar"
                    onClick={() => {
                      changeAlgorithm("astar");
                    }}
                  >
                    A* Search
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#dijkstra"
                    onClick={() => {
                      changeAlgorithm("dijkstra");
                    }}
                  >
                    Dijkstra
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    href="#bfs"
                    onClick={() => {
                      changeAlgorithm("bfs");
                    }}
                  >
                    Breadth First Search
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="#bfs">
                    BFS is a traversing algorithm where you should start from a
                    selected node and traverse the graph layerwise thus
                    exploring the neighbour nodes.{" "}
                    <em>Shortest path is guarenteed!</em>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#dijkstra">
                    One algorithm for finding the shortest path from a starting
                    node to a target node in a weighted graph is Dijkstra’s
                    algorithm. The algorithm creates a tree of shortest paths
                    from the starting vertex, the source, to all other points in
                    the graph. This is what Google Maps uses.
                  </Tab.Pane>
                  <Tab.Pane eventKey="#astar">
                    A* is an informed search algorithm, or a best-first search,
                    meaning that it is formulated in terms of weighted graphs:
                    starting from a specific starting node of a graph, it aims
                    to find a path to the given goal node having the smallest
                    cost.
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </FormGroup>
      </div>
    );
  }
}

export default SearchPicker;
