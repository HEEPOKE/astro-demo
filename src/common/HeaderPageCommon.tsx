interface HeaderPageCommonProps {
    title: string;
  }
  
export default function HeaderPageCommon({ title }: HeaderPageCommonProps) {
    return (
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto-12">
              <h1 className="m-0">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }