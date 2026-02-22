import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { templates } from "../data/template";

const Filtered = () => {

  const { category } = useParams();
  const navigate = useNavigate();

  const filteredTemplates = templates.filter(
    (item) =>
      item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="Inventory">

      <br />
      <br />

      <div className="Inventory-Details">
        <h2>{category.toUpperCase()} INVITATIONS</h2>
      </div>

      <div className="Inventory-Products">

        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((item) => (

            <div
              className="card"
              key={item.id}
              onClick={() => navigate(`/template/${item.slug}`)}
              style={{ cursor: "pointer" }}
            >

              <div className="Products">
                <img src={item.imgSrc} alt="template" />
              </div>

              <button
                className="btn-order"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/Create_Invitation");
                }}
              >
                Order Now
              </button>

            </div>

          ))
        ) : (
          <h3>No templates found</h3>
        )}

      </div>

    </div>
  );
};

export default Filtered;