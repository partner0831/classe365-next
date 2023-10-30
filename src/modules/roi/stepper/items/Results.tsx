import React from "react";
import * as Styled from "./items.styles";
import { Chart } from "react-google-charts";

export const Results: React.FC = () => {
  return (
    <Styled.ItemCardWrapper width={1110}>
      <Styled.CardTitle>
        {
          "By using Classe365, <company name> can save <1,097,847> in the next three years"
        }
      </Styled.CardTitle>
      <p style={{ marginLeft: 0 }}>
        {
          "These are the results based on the default values in the tool or entries you have made. Click on the Inputs button to review the high-level assumptions or the Costs and Benefits links below to review the detailed calculations."
        }
      </p>
      <Styled.ResultSummaryWrapper>
        <Styled.ResultSummaryTitle>
          <h4>Financial Summary</h4>
          <div>
            <p>Costs</p>
            <p>Benefits</p>
            <p>Net Cash Flow</p>
            <p>Cumulative Cash Flow</p>
          </div>
          <h2>ROI</h2>
        </Styled.ResultSummaryTitle>
        <Styled.ResultSummaryYear>
          <Styled.ResultSummaryYearGrid>
            <div>
              <h4>Year1</h4>
              <div>
                <p>2,156</p>
                <p>761,869</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </div>
            <div>
              <h4>Year1</h4>
              <div>
                <p>2,156</p>
                <p>761,869</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </div>
            <div>
              <h4>Year1</h4>
              <div>
                <p>2,156</p>
                <p>761,869</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </div>
          </Styled.ResultSummaryYearGrid>
          <h2>352.37%</h2>
        </Styled.ResultSummaryYear>
        <Styled.ResultSummaryChart>
          <h1>Cumulative Cash Flow</h1>
          <div>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="250px"
              data={[
                ["Year", ""],
                ["Year 1", 761869],
                ["Year 2", 1761869],
                ["Year 3", 4761869],
              ]}
              options={{
                curveType: "function",
                legend: { position: "none" },
              }}
            />
          </div>
        </Styled.ResultSummaryChart>
      </Styled.ResultSummaryWrapper>
      <div>
        <Styled.CardTitle>Potential Benefits</Styled.CardTitle>
        <Styled.ResultPotentialWrapper>
          <Styled.ResultPotentialContainer>
            <div>
              <h3>Improving Business Outcomes</h3>
              <p>
                <span>Reduce Administrative Costs</span>
                <span>761,869</span>
              </p>
              <p>
                <span>
                  Reduced cost in stationary, printing & record keeping
                </span>
                <span>759,713</span>
              </p>
              <p>
                <span>Reduced cost of running IT Systems</span>
                <span>759,713</span>
              </p>
            </div>
            <div>
              <h3>Increase End-User Productivity & Revenue</h3>
              <p>
                <span>Increase End-User Productivity</span>
                <span>761,869</span>
              </p>
              <p>
                <span>Real Estate Savings</span>
                <span>759,713</span>
              </p>
              <p>
                <span>Net New Revenue from e-Commerce Module</span>
                <span>759,713</span>
              </p>
              <p>
                <span>Increase Organisation Brand – Revenue Growth</span>
                <span>600,000</span>
              </p>
            </div>
            <div className="last-child">
              <h3>Environmental Sustainability</h3>
              <p>
                <span>Environmental cost savings</span>
                <span>761,869</span>
              </p>
            </div>
            <h4>
              <span>Total Potential Annual Benefits</span>
              <span>761,869</span>
            </h4>
          </Styled.ResultPotentialContainer>
          <Styled.ResultPotentialChart>
            <Chart
              chartType="PieChart"
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7],
              ]}
              options={{
                legend: { position: "none" },
              }}
              width={"100%"}
              height={"400px"}
            />
          </Styled.ResultPotentialChart>
        </Styled.ResultPotentialWrapper>
      </div>
      <div>
        <Styled.CardTitle>Benefits over 3 years</Styled.CardTitle>
        <Styled.ResultBenefitWrapper>
          <Styled.ResultBenefitItem>
            <Styled.ResultBenefitRow>
              <h3>Improving Business Outcomes</h3>
              <div>
                <h3></h3>
                <h3>Year 1</h3>
                <h3>Year 2</h3>
                <h3>Year 3</h3>
              </div>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Reduce Administrative Costs</p>
              <div>
                <p>USD</p>
                <p>761,869</p>
                <p>761,869</p>
                <p>761,869</p>
              </div>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Reduced cost in stationary, printing & record keeping</p>
              <div>
                <p>USD</p>
                <p>759,713</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Reduced cost of running IT Systems</p>
              <div>
                <p>USD</p>
                <p>759,713</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </Styled.ResultBenefitRow>
          </Styled.ResultBenefitItem>
          <Styled.ResultBenefitItem>
            <Styled.ResultBenefitRow>
              <h3>Increase End-User Productivity & Revenue</h3>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Increase End-User Productivity</p>
              <div>
                <p>USD</p>
                <p>761,869</p>
                <p>761,869</p>
                <p>761,869</p>
              </div>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Real Estate Savings</p>
              <div>
                <p>USD</p>
                <p>759,713</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Net New Revenue from e-Commerce Module</p>
              <div>
                <p>USD</p>
                <p>759,713</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Increase Organisation Brand – Revenue Growth</p>
              <div>
                <p>USD</p>
                <p>600,000</p>
                <p>600,000</p>
                <p>600,000</p>
              </div>
            </Styled.ResultBenefitRow>
          </Styled.ResultBenefitItem>
          <Styled.ResultBenefitItem className="last-child">
            <Styled.ResultBenefitRow>
              <h3>Environmental Sustainability</h3>
            </Styled.ResultBenefitRow>
            <Styled.ResultBenefitRow>
              <p>Environmental cost savings</p>
              <div>
                <p>USD</p>
                <p>761,869</p>
                <p>761,869</p>
                <p>761,869</p>
              </div>
            </Styled.ResultBenefitRow>
          </Styled.ResultBenefitItem>
          <Styled.ResultBenefitRow className="subtotal">
            <h3>Total Potential Annual Benefits</h3>
            <div>
              <p>
                <b>USD</b>
              </p>
              <h3>
                <b>761,869</b>
              </h3>
              <h3>
                <b>761,869</b>
              </h3>
              <h3>
                <b>761,869</b>
              </h3>
            </div>
          </Styled.ResultBenefitRow>
          <Styled.ResultBenefitRow className="total">
            <h3>Environmental cost savings</h3>
            <div>
              <h3>
                <b>761,869</b>
              </h3>
            </div>
          </Styled.ResultBenefitRow>
        </Styled.ResultBenefitWrapper>
      </div>
      <div>
        <Styled.CardTitle>Cost</Styled.CardTitle>
        <Styled.ResultCostWrapper>
          <Styled.ResultCostTitle>
            <header></header>
            <div>
              <p>
                <span>Application Cost</span>
                <span>USD</span>
              </p>
              <p>
                <span>Data Migration Cost</span>
                <span>USD</span>
              </p>
              <p>
                <span>Data Maintenance Cos</span>
                <span>USD</span>
              </p>
              <h3>
                <span>Total Cost</span>
                <span>USD</span>
              </h3>
            </div>
          </Styled.ResultCostTitle>
          <Styled.ResultCostGrid>
            <Styled.ResultCostGridItem>
              <header>Year 1</header>
              <div>
                <p>1,764</p>
                <p>196</p>
                <p>196</p>
                <h3>2,156</h3>
              </div>
            </Styled.ResultCostGridItem>
            <Styled.ResultCostGridItem>
              <header>Year 2</header>
              <div>
                <p>1,764</p>
                <p>0</p>
                <p>196</p>
                <h3>1,960</h3>
              </div>
            </Styled.ResultCostGridItem>
            <Styled.ResultCostGridItem>
              <header>Year 3</header>
              <div>
                <p>1,764</p>
                <p>0</p>
                <p>196</p>
                <h3>1,960</h3>
              </div>
            </Styled.ResultCostGridItem>
          </Styled.ResultCostGrid>
        </Styled.ResultCostWrapper>
      </div>
    </Styled.ItemCardWrapper>
  );
};
