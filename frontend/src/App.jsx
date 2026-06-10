import { useEffect, useState } from 'react'

function App() {
  const [produtos, setProdutos] = useState([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    
    fetch(`${apiUrl}/api/produtos`)
      .then(res => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(data => setProdutos(data))
      .catch(() => setErro('Falha na conexao com a infraestrutura SRE'))
  }, [])

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ borderBottom: '1px solid #334155', paddingBottom: '20px', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#38bdf8', margin: '0' }}>HyperXpress - Controle de Inventario</h1>
          <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Painel SRE conectado via Docker Core Network</p>
        </header>

        <div style={{ backgroundColor: '#1e293b', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Produtos em Monitoramento</h2>
            <span style={{ backgroundColor: erro ? '#ef4444' : '#22c55e', color: '#ffffff', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
              {erro ? erro : 'Sistema Online'}
            </span>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #334155', color: '#94a3b8', fontSize: '14px' }}>
                <th style={{ padding: '12px' }}>ID</th>
                <th style={{ padding: '12px' }}>Nome do Item</th>
                <th style={{ padding: '12px' }}>Categoria</th>
                <th style={{ padding: '12px' }}>Qtd Estoque</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(prod => (
                <tr key={prod.id} style={{ borderBottom: '1px solid #334155', fontSize: '15px' }}>
                  <td style={{ padding: '16px 12px', color: '#38bdf8' }}>#{prod.id}</td>
                  <td style={{ padding: '16px 12px', fontWeight: '5px' }}>{prod.nome}</td>
                  <td style={{ padding: '16px 12px', color: '#cbd5e1' }}>{prod.categoria}</td>
                  <td style={{ padding: '16px 12px', fontWeight: '600' }}>{prod.estoque} un</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ color: prod.status === 'Disponivel' ? '#4ade80' : '#fb923c', fontSize: '13px' }}>
                      ● {prod.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App