import mitt from 'mitt';

type Events = {
    back: void;
}

export default mitt<Events>();
