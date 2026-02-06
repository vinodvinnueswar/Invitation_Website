import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { API_Path } from '../helpers/ApiPath'

const Samples_Page = () => {
  const navigate = useNavigate()

  const [vendorData, setVendorData] = useState({ vendors: [] })
  const [loading, setLoading] = useState(true)

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_Path}/vendor/all-vendors`)
      const newData = await response.json()
      setVendorData(newData)
      setLoading(false)
    } catch (error) {
      console.error('failed to fetch data', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    vendorFirmHandler()
  }, [])

  if (loading) {
    return <h2 style={{ textAlign: 'center' }}>Loading inventory...</h2>
  }

  return (
    <div className="Inventory">
      <div className="Back-Button">
        <button className="btn-Back" onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>

      <div className="Inventory-Details">
        <h2>Inventory</h2>
        <p>Here the products to make your invitation more elegant</p>
      </div>

      <div className="Inventory-Products">
        {vendorData.vendors.length === 0 && <h3>No items found</h3>}

        {vendorData.vendors.map((vendor) =>
          vendor.inventory?.map((item, index) => (
            <Link
              key={`${vendor._id}-${index}`}
              className="Products"
              to={item?.webUrl}
            >
              <div>
                <img
                  src={`${API_Path}/uploads/${item.image}`}
                  alt={item.name || 'product'}
                />
                <h4>{item.name}</h4>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Samples_Page
