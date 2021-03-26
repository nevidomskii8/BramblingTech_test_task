import React from 'react'

export const Icon = ({ name, ...rest }) => {
    const ImportedIconRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);
  
    React.useEffect(() => {
      setLoading(true);
      const importIcon = async () => {
        try {
          // ImportedIconRef.current = (await import(`../../assets/svg/images/dog.svg`)).ReactComponent;
        } catch (err) {
          // Your own error handling logic, throwing error for the sake of
          // simplicity
          throw err;
        } finally {
          setLoading(false);
        }
      };
      importIcon();
    }, [name]);

    console.log('loading ', loading, ' current ', ImportedIconRef.current )
  
    if (!loading && ImportedIconRef.current) {
      const { current: ImportedIcon } = ImportedIconRef;
      return <ImportedIcon {...rest} />;
    }
  
    return null;
  };
  