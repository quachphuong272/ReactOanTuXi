import React, { Component } from 'react'
import {connect} from 'react-redux';

class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{ transform: 'rotate(180deg)' }} className="mt-3" width={50} height={50} src={this.props.mangDatCuoc.find(item=>item.datCuoc ===true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc ===true).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src="./img/gameOanTuXi/player.png" alt="player" />

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        // Xét giá trị đặt cược thêm viền cho item được chọn
                       let border ={};
                       if(item.datCuoc){
                           border = {border: "3px solid orange"}
                       }

                        return <div className="col-4">
                        <button onClick={()=>{this.props.datCuoc(item.ma);}} style={border} className="btnItem">
                            <img src={item.hinhAnh}
                                alt={item.hinhAnh} width={50} height={50} />
                        </button>
                    </div>
                    })}                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch ({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)