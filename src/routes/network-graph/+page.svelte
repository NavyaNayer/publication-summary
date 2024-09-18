<script lang="ts">
  import { onMount } from 'svelte';

  let container: HTMLDivElement | null = null;
  let network: any;

  type Node = {
    id: number;
    label: string;
  };

  type Edge = {
    from: number;
    to: number;
  };

  let nodes: Node[] = [];
  let edges: Edge[] = [];

  async function fetchPublications() {
    console.log('Fetching publications...');
    const response = await fetch('/coauthor.json');
    if (!response.ok) {
      throw new Error('Failed to load JSON');
    }
    console.log('Publications fetched successfully');
    return await response.json();
  }

  onMount(async () => {
    console.log('onMount triggered');
    try {
      const authorData = await fetchPublications();
      const publications = authorData.publications;
      console.log('Publications data:', publications);

      if (window.vis) {
        console.log('vis-network library loaded');
      } else {
        console.error('vis-network library not loaded');
      }

      if (container) {
        console.log('Container is available');
      } else {
        console.error('Container is not available');
      }

      if (window.vis && container) {
        const { Network, DataSet } = window.vis;

        // Map authors and create nodes and edges
        let authorsMap = new Map<string, number>();
        let nodeId = 1;

        publications.forEach((pub: { authors: any; }) => {
          let authors = pub.authors;

          // Ensure authors is an array
          if (Array.isArray(authors)) {
            // Create nodes for each author if not already created
            authors.forEach((author: any) => {
              if (!authorsMap.has(author)) {
                authorsMap.set(author, nodeId);
                nodes.push({ id: nodeId, label: author });
                nodeId++;
              }
            });

            // Create edges for co-authors
            for (let i = 0; i < authors.length; i++) {
              for (let j = i + 1; j < authors.length; j++) {
                let author1Id = authorsMap.get(authors[i]);
                let author2Id = authorsMap.get(authors[j]);

                if (author1Id && author2Id) {
                  edges.push({ from: author1Id, to: author2Id });
                }
              }
            }
          } else {
            console.warn('Expected authors to be an array, but got:', authors);
          }
        });

        // Initialize the vis-network graph
        const data = {
          nodes: new DataSet(nodes),
          edges: new DataSet(edges)
        };

        const options = {
          layout: {
            improvedLayout: true
          },
          nodes: {
            shape: 'dot',
            size: 15,
            font: {
              size: 14,
              color: '#333'
            },
            color: {
              border: '#000',
              background: '#f0f0f0'
            }
          },
          edges: {
            width: 2,
            color: '#000'
          },
          physics: {
            enabled: true,
            stabilization: { iterations: 100 }
          }
        };

        // Create the graph in the container
        network = new Network(container, data, options);
        console.log('Network created successfully');
      } else {
        console.error('vis-network is not loaded or container is not available');
      }
    } catch (err) {
      // Refine error type to Error to access the message
      if (err instanceof Error) {
        console.error('Error fetching or rendering data:', err.message);
      } else {
        console.error('An unexpected error occurred');
      }
    }
  });
</script>

<style>
  .network-container {
    width: 100%;
    height: 600px;
    border: 1px solid #000;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
  }
</style>

<h2>Co-Author Network Graph</h2>
<div class="network-container" bind:this={container}></div>
