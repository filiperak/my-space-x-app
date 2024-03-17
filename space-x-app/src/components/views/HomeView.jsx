import { useState, useEffect } from "react";
import instance from "../../services/api";
import Company from "../company/Company";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const HomeView = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("company")
      .then((res) => {
        setCompanyInfo(res.data);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return (
    <>
      <h1>HomeView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Company companyInfo={companyInfo} />
      )}
    </>
  );
};

export default HomeView;
