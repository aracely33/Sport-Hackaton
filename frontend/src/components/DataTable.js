import React from "react";

const DataTable = () => {
  return (
    <div>
      <table border="1" className="dataframe">
        <thead>
          <tr style={{ textAlign: "right" }}>
            <th></th>
            <th>fifa_rank_A</th>
            <th>fifa_rank_B</th>
            <th>fifa_points_A</th>
            <th>fifa_points_B</th>
            <th>goles_A</th>
            <th>goles_B</th>
            <th>resultado_A_num</th>
            <th>diferencia_fifa_rank</th>
            <th>diferencia_fifa_rank_app</th>
            <th>año</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>count</th>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
            <td>23921.00</td>
          </tr>
          <tr>
            <th>mean</th>
            <td>77.85</td>
            <td>80.80</td>
            <td>323.40</td>
            <td>315.45</td>
            <td>1.61</td>
            <td>1.07</td>
            <td>0.21</td>
            <td>2.94</td>
            <td>1.57</td>
            <td>2008.28</td>
          </tr>
          {/* ... Resto de las filas ... */}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
